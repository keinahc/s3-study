const dirName = {
  src: 'src',
  dest: 'public'
};

const srcRoot = `./${dirName.src}`;
const destRoot = `./${dirName.dest}`;

const srcDir = {
  root: srcRoot,
  sass: `${srcRoot}/sass`
};

const destDir = {
  root: destRoot,
  css: `${destRoot}/css`
};

export default {
  dirName: dirName,
  srcDir: srcDir,
  destDir: destDir
}
