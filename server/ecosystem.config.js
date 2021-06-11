module.exports = {
  apps: [{
    name: 'sdc-proxy',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-116-161-87.us-east-2.compute.amazonaws.com',
      key: '../sdc-proxy.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rpt26-sdc-prototype/tim-proxy.git',
      path: '/home/ubuntu/sdc-proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}