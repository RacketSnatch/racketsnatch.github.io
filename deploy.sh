# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com:projectname 项目的 gh-pages 分支
# 如果本地初次建立git是变到main分支的话(现在好像都得先checkout)
git checkout -b main
git push -f git@github.com:RacketSnatch/racketsnatch.github.io.git main:gh-pages

cd -

