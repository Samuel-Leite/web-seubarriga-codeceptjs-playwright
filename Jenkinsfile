pipeline {
  agent any
  //tools {nodejs "node16"}
 
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Test') {
      steps {
        sh 'npm run tag "@wip"'
      }
    }
  }
}