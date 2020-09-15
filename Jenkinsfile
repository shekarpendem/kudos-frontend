pipeline {
   environment {
     dockerRegistry = "rthirumal1999/kudos-frontend"
     dockerRegistryCredential = 'docker-hub'
     dockerImage = ''
   }
   agent any
   tools {nodejs "nodejs" }
   stages {
     stage('Cloning Git') {
       steps {
         git 'https://github.com/shekarpendem/kudos-frontend.git'
       }
     }
     stage('Build') {
        steps {
          sh 'npm install'
        }
     }
     stage('Test') {
       steps {
         sh 'echo Skipping tests'
       }
     }
     stage('Building image') {
       steps{
         script {
           dockerImage = docker.build dockerRegistry + ":0.1.0-SNAPSHOT"
         }
       }
     }
     stage('Upload Image') {
       steps{
         script {
           docker.withRegistry( '', dockerRegistryCredential ) {
             dockerImage.push()
           }
         }
       }
     }
     stage('Remove Unused docker image') {
       steps{
         sh "docker rmi $dockerRegistry:0.1.0-SNAPSHOT"
       }
     }
    stage('Deploy to AWS') {
        environment {
            DOCKER_HUB_LOGIN = credentials('docker-hub')
        }
        steps {
            withAWS(credentials: 'aws-credentials', region: env.REGION) {
                sh './gradlew awsCfnMigrateStack awsCfnWaitStackComplete -PsubnetId=$SUBNET_ID -PdockerHubUsername=$DOCKER_HUB_LOGIN_USR'
            }
        }
    }
   }
}

