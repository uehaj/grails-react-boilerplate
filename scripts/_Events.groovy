eventCompileStart = {kind ->
    // Ants Project is available via: kind.ant.project
    executeWebpack()
    // Obtain status and output
}

private void executeWebpack(){
    println "| Compile and bundle js files..."
    def proc = ["sh", "-c", "(cd react-app; npm run-script deploy)"].execute()
    proc.waitFor()
    if(proc.exitValue() != 0){
        println "| Error! js compile failed : ${proc.err.text}"
    }
    println proc.text
}
