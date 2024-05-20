pipeline {
  agent any
  //tools {nodejs "node16"}
 
  stages {
    stage('Install dependencies') {
        steps {
            sh '''
                ls -la
                node --version
                npm --version
                npm install
                npx playwright update
                ls -la
            '''
        }
    }
    stage('Run Test') {
      steps {
        sh 'npm run tag "@wip"'
      }
    }
  }
}