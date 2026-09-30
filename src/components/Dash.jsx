
import { useState, useEffect, useRef, useMemo } from 'react';
import React from 'react';
import { RM } from '../lib';
import { Rv, Mag, Glow, Par, useIn } from './ui';
import { NAV, S, MS } from '../data';

export default function Dash() {
  const [ref, on] = useIn();

  const GITHUB_USERNAME = 'BabatundeJimoh';

  const [repositories, setRepositories] = useState([]);
  const [githubUser, setGithubUser] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  /*
   * Temporary visual contribution grid.
   *
   * GitHub's complete contribution history is not available
   * from the public /users/:username/repos REST endpoint.
   *
   * We keep your original visual until we connect GitHub
   * GraphQL/backend support for real contribution data.
   */
  const cells = useMemo(
    () =>
      Array.from(
        { length: 182 },
        () =>
          Math.random() < 0.45
            ? 0.06
            : +(0.15 + Math.random() * 0.6).toFixed(2)
      ),
    []
  );

  /*
   * Fetch GitHub profile + repositories
   */
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError('');

        // Fetch GitHub profile
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );

        if (!userResponse.ok) {
          throw new Error('Unable to load GitHub profile.');
        }

        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );

        if (!reposResponse.ok) {
          throw new Error('Unable to load GitHub repositories.');
        }

        const reposData = await reposResponse.json();

        setGithubUser(userData);
        setRepositories(reposData);

        /*
         * Count the primary languages used across repositories.
         */
        const languageMap = {};

        reposData.forEach((repo) => {
          if (repo.language) {
            languageMap[repo.language] =
              (languageMap[repo.language] || 0) + 1;
          }
        });

        const total = Object.values(languageMap).reduce(
          (sum, value) => sum + value,
          0
        );

        const languageData = Object.entries(languageMap)
          .map(([language, count]) => ({
            name: language,
            value: total
              ? Math.round((count / total) * 100)
              : 0,
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 4);

        setLanguages(languageData);
      } catch (err) {
        console.error('GitHub API error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  /*
   * Most recently updated repositories
   */
  const recentRepositories = repositories.slice(0, 4);

  /*
   * Total stars across your repositories
   */
  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  /*
   * Public repositories that are not forks
   */
  const originalRepositories = repositories.filter(
    (repo) => !repo.fork
  );

  return (
    <div
      ref={ref}
      className={'dash rv ' + (on ? 'in' : '')}
    >
      {/* --------------------------------
          CONTRIBUTION ACTIVITY
      --------------------------------- */}
      <div className="pn">
        <h3>Contribution activity</h3>

        <div className="hm" aria-hidden="true">
          {cells.map((o, i) => (
            <i
              key={i}
              style={{ '--o': o }}
            />
          ))}
        </div>

        <p className="note m">
          GitHub contribution activity
        </p>
      </div>

      {/* --------------------------------
          RECENT REPOSITORIES
      --------------------------------- */}
      <div className="pn">
        <h3>Recent repositories</h3>

        {loading && (
          <p className="note m">
            Loading repositories...
          </p>
        )}

        {error && (
          <p className="note m">
            {error}
          </p>
        )}

        {!loading &&
          !error &&
          recentRepositories.map((repo) => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo"
              key={repo.id}
            >
              <b>{repo.name}</b>

              <span>
                {repo.language || 'Code'}
              </span>
            </a>
          ))}

        {!loading &&
          !error &&
          recentRepositories.length === 0 && (
            <p className="note m">
              No public repositories found.
            </p>
          )}
      </div>

      {/* --------------------------------
          LANGUAGES
      --------------------------------- */}
      <div className="pn">
        <h3>Languages</h3>

        {loading && (
          <p className="note m">
            Loading languages...
          </p>
        )}

        {!loading &&
          languages.map(({ name, value }) => (
            <div key={name}>
              <div className="m">
                {name} · {value}%
              </div>

              <div className="bar">
                <i
                  style={{
                    width: on ? `${value}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}

        {!loading &&
          languages.length === 0 && (
            <p className="note m">
              No language data available.
            </p>
          )}
      </div>

      {/* --------------------------------
          STATS
      --------------------------------- */}
      <div className="pn">
        <h3>Stats</h3>

        <div className="repo">
          <span>Repositories</span>

          <b>
            {loading
              ? '—'
              : githubUser?.public_repos ?? repositories.length}
          </b>
        </div>

        <div className="repo">
          <span>Followers</span>

          <b>
            {loading
              ? '—'
              : githubUser?.followers ?? 0}
          </b>
        </div>

        <div className="repo">
          <span>Stars</span>

          <b>
            {loading ? '—' : totalStars}
          </b>
        </div>
      </div>
    </div>
  );
}
