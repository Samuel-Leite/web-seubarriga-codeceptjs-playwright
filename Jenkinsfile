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
                node --version
                npm --version
                npm install
            '''
        }
    }
    stage('Run Test') {
        agent {
            docker{
                image 'node:20.9.0-alpine3.18'
                reuseNode true
            }
        }  
        steps {
            sh 'npm run tag "@wip"'
        }
    }
  }
}