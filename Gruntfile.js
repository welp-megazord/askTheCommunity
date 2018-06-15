// module.exports = function(grunt) {
    
//     // grunt.initConfig({
//     //     pkg: grunt.file.readJSON('package.json'),
//     //     aws: grunt.file.readJSON("aws-credentials.json"),
//     //     s3: {
//     //         options: {
//     //             accessKeyId: "<%= aws.accessKeyId %>",
//     //             secretAccessKey: "<%= aws.secretAccessKey %>",
//     //             bucket: "welp-questions-bundle",
//     //             region: "us-west-1"
//     //         },
//     //         build: {
//     //             cwd: "client/dist/",
//     //             src: "bundle.js"
//     //         }
//     //     }
//     // });
//     // grunt.loadNpmTasks('grunt-aws');
//     // grunt.registerTask('default', [ "s3" ])
//     grunt.loadNpmTasks('grunt-aws');
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),
//         aws: grunt.file.readJSON('aws-credentials.json'),
//         s3: {
//           options: {
//             accessKeyId: '<%= aws.accessKeyId %>',
//             secretAccessKey: '<%= aws.secretAccessKey %>',
//             bucket: 'welp-questions-bundle',
//             region: 'us-west-1'
//           },
//           build: {
//             cwd: 'client/dist',
//             src: 'bundle.js'
//           }
//         },
        
//         watch: {
//           scripts: {
//             files: ['client/dist/bundle.js'],
//             tasks: ['s3'],
//             options: {
//               spawn: false,
//             }
//           }
//         }
//       });
//       // Load the plugin that provides the "uglify" task.
//     //   grunt.loadNpmTasks('grunt-contrib-watch');
//     //   grunt.loadNpmTasks('grunt-contrib-cssmin');
    
//       // Default task(s).
//       grunt.registerTask('default', ['s3']);
// }

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-aws");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({

        aws: grunt.file.readJSON("aws-credentials.json"),

        s3: {
            options: {
                accessKeyId: "<%= aws.accessKeyId %>",
                secretAccessKey: "<%= aws.secretAccessKey %>",
                region: "us-west",
                bucket: "welp-questions-bundle"
            },
            build: {
                cwd: "client/dist",
                src: "bundle.js",
            }
        },
        watch: {
          scripts: {
            files: ["client/dist/bundle.js"],
            tasks: ["s3"], 
            options: {
              spawn: false
            },
          }
        }
    });
    grunt.registerTask("default", ["s3"]);
}