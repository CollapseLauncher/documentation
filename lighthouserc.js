module.exports = {
    ci: {
      collect: {
        staticDistDir: './home/.vitepress/dist/',
        startServerCommand: 'npm run home:preview'
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };