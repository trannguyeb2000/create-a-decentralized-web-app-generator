const decentConfig = {
  // Project Configuration
  projectName: 'Decent Web App Generator',
  projectDescription: 'A decentralized web app generator for creating robust and secure applications',
  projectVersion: '1.0.0-alpha',

  // Blockchain Configuration
  blockchain: {
    name: 'Ethereum',
    network: 'Rinkeby Testnet',
    contractAddress: '0x1234567890abcdef',
  },

  // Frontend Configuration
  frontend: {
    framework: 'React',
    templateEngine: 'Handlebars',
    styles: 'Tailwind CSS',
  },

  // Backend Configuration
  backend: {
    framework: 'Express.js',
    database: 'IPFS',
  },

  // Security Configuration
  security: {
    encryption: 'AES-256',
    authentication: 'Web3.js',
    authorization: 'Role-Based Access Control',
  },

  // Generator Configuration
  generator: {
    templates: [
      {
        name: 'Basic Web App',
        description: 'A basic web app with login and dashboard',
        templateFiles: ['index.html', 'login.js', 'dashboard.js'],
      },
      {
        name: 'Blog',
        description: 'A blogging platform with post and comment functionality',
        templateFiles: ['index.html', 'post.js', 'comment.js'],
      },
    ],
  },

  // Output Configuration
  output: {
    directory: 'generated-app',
    filename: 'app.js',
  },
};

module.exports = decentConfig;