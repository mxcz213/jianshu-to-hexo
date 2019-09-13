import { getAllMarkDownFiles } from './libs/lib';
import { read } from './utils/files';
import runScript from 'runscript';
import fs from 'fs';
import path from 'path';
// sourceDir: 文章源目录
// targetDir: hexo博客源码目录
const [, , sourceDir, targetDir] = process.argv;

// const sourceDir = 'E:\\workCode\\user-4444';
// const targetDir = 'E:\\workCode\\blog-hexo';
const publishDir = path.join(targetDir, '/source', '/_posts');

const main = async () => {
    /*
        1.读取简述文章列表
        2.读取文章中的内容
        3.执行`hexo new <title>`创建文章
        4.打开创建的文章，将内容写进去
        5.执行`hexo publish`
    */

   const files = await getAllMarkDownFiles(sourceDir);

   files.map(async (file) => {
    const content = read(`${sourceDir}\\${file}`);  

    const articleTitle = file.split('/')[1].split('.md')[0];
    const articlePath = file.split('/')[1];

    //创建文章
    await runScript(`hexo new ${articleTitle} -r`);

    //写入内容
    const filepath = path.join(publishDir, articlePath);
    const title = `---\ntitle: ${articleTitle}\n---`;

    fs.writeFileSync(filepath, `${title}\n${content}`);

   })
   console.log('123')
}

main();