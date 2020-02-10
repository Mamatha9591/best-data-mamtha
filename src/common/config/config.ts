const config = {
    dev: {
      hash: 'JNI_#cju8h`s}^QD7*t0UCS}z:&"T1',
      jwtSecret: "A1n61dB9TllY7M2bUkjzXQljBs9E5sgo"
    },
    prod: {
      hash: 'JNI_#cju8h`s}^QD7*t0UCS}z:&"T1',
      jwtSecret: "A1n61dB9TllY7M2bUkjzXQljBs9E5sgo"
    }
  };
  
  export default config[process.env.ENVIRONMENT || "dev"];
  