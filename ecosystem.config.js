module.exports = {
  apps : [
    {
    name: 'backend',
    cwd: './backend',
    script: 'npm',
    args: 'run start:dev',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '150M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
    {
        name: 'frontend',
        cwd: './frontend',
        script: 'npm',
        args: 'run start:dev',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '150M',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }]
};
