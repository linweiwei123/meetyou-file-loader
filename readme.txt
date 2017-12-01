# joi express middleware

npm install meetyou-express-joi --save

# github
https://github.com/linweiwei123/meetyou-file-loader

# Example

```javascript
    {
      test: /\.(jpg|png|webp)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'meetyou-url-loader',
        options: {
          name: '[name].[hash].[ext]',
          limit: 10,
          paramFlag:'x-oss-process=image/format,webp'
        }
      }]
    }

    <img class="bg-img" src="../images/bg.png?x-oss-process=image/format,webp" alt="">

    change to

    <img class="bg-img" src="../images/bg.png?x-oss-process=image/format,webp" alt="">

    without remove the '?x-oss-process=image/format,webp'

 })
 ```

