import runScript from 'runscript';

export const getAllMarkDownFiles = async (sourceDir: string) => {
    //ls **/*.md 查询二级目录下的所有.md后缀的文件
    //stdio: pipe 在父进程和子进程之间建立管道
    const { stdout } = await runScript('ls **/*.md', {
        cwd: sourceDir,
        stdio: 'pipe'
    });
    if(stdout){
        const files: string[] = stdout.toString().split('\n');
        files.pop();
        return files;
    } else {
        return [];
    }
}