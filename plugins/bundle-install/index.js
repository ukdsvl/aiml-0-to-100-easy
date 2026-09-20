const { execSync } = require('child_process')

module.exports = {
  onPreBuild: async ({ utils }) => {
    try {
      execSync('bundle check', { stdio: 'pipe', cwd: process.cwd() })
    } catch {
      try {
        execSync('bundle install', { stdio: 'inherit', cwd: process.cwd() })
      } catch (error) {
        return utils.build.failBuild('bundle install failed', { error })
      }
    }
  },
}
