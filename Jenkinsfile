pipeline {
  agent any
  //tools {nodejs "node16"}
 
  stages {
    stage('Install dependencies') {
        agent {
            docker{
                image 'node:20.9.0-alpine3.18'
                reuseNode true
            }
        }
        steps {
            sh '''
                ls -la
                node --version
                npm --version
                npm install
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