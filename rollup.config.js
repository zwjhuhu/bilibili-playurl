import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'index.js',
    output: {
        format: 'iife',
        file: 'dist/biliplayurl.js',
        name: 'biliplayurl',
        sourceMap: true,
        global: {
        	'window.Promise':'Promise',
        	'window.Object':'Object'
        }
    },
    plugins: [
        resolve({
            jsnext: true, // 该属性是指定将Node包转换为ES2015模块
            // main 和 browser 属性将使插件决定将那些文件应用到bundle中
            main: true, // Default: true 
            browser: true // Default: false
        }),
        commonjs(),
        babel({
        	exclude: 'node_modules/**'
        }),
        uglify({mangle:false})

    ]
}