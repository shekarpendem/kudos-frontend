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
           dockerImage = docker.build dockerRegistry + ":$BUILD_NUMBER"
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
         sh "docker rmi $dockerRegistry:$BUILD_NUMBER"
       }
     }
   }
 }
