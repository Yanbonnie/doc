webpack+ES6+less�����������������Ƶ�̳̣�
������Դ��https://cnodejs.org/topic/571f4e785a26c4a841ecbd7c
webpack��ʲô

Webpack ��һ��ģ����������������ģ���������ϵ���о�̬������Ȼ����Щģ�鰴��ָ���Ĺ������ɶ�Ӧ�ľ�̬��Դ��
1.png

�ٶ�������Ƶ���أ�http://pan.baidu.com/s/1jIPJucu
�ٶ��������߹ۿ���http://pan.baidu.com/share/link?shareid=1645979812&uk=2469628767&fid=988128759555711

��������

	  webpack         // �����������webpack�ķ���
	  webpack -w      // �ṩwatch������ʵʱ���д������
	  webpack -p      // �Դ������ļ�����ѹ��
	  webpack -d      // �ṩsource map�������ʽ����
ȫ�ְ�װ

	  # npm install webpack -g
	  ��Ŀ��װ��
	  # ������ĿĿ¼
	  # ȷ���Ѿ��� package.json��û�о�ͨ�� npm init ����
	  # ��װ webpack ����
	  # npm install webpack --save-dev
ʹ��ES6

	��װ babel-loader�� 
	# npm install babel-loader --save-dev
	��װת�����       
	# npm install babel-preset-es2015 --save-dev
	ES7��ͬ�׶��﷨�᰸��ת����򣨹���4���׶Σ���ѡװһ��
	# npm install --save-dev babel-preset-stage-0
	# npm install --save-dev babel-preset-stage-1
	# npm install --save-dev babel-preset-stage-2
	# npm install --save-dev babel-preset-stage-3
	�ο���ʽ��
	{
		test: /\.js$/,
		loader: 'babel?presets[]=es2015,presets[]=stage-0'
	}
����css

	��װcss-loader��  
	# npm install css-loader  --save-dev
	��װstyle-loader  
	# npm install style-loader  --save-dev
	�ο���ʽ��
	{
		test: /\.css$/,
		loaders: ['style', 'css', 'autoprefixer']
	}
����less

	# npm install less --save-dev
	��װless-loader�� 
	# npm install less-loader --save-dev
	�ο���ʽ��
	{
		test: /\.less/,
		loaders: ['style', 'css', 'autoprefixer', 'less'],
	}
ʹ��autoprefixer�Զ��������������

	# npm install autoprefixer-loader --save-dev
	�ο���ʽ��
	{
		test: /\.css$/,
		loaders: ['style', 'css', 'autoprefixer']
	}, {
		test: /\.less/,
		loaders: ['style', 'css', 'autoprefixer', 'less'],
	}
�����ļ�

	��װfile-loader�� 
	# npm install file-loader --save-dev
	�ο���ʽ��
	{
		test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
		loader: 'file-loader?name=[hash].[ext]'
	}
����ͼƬ

  # npm install url-loader --save-dev
  �ο���ʽ��
  {
  test: /\.(png|jpg)$/,
  loader: 'url?limit=1200&name=[hash].[ext]'
  }
����JSX

  # npm install jsx-loader --save-dev
  # npm install babel-preset-react --save-dev
  �ο���ʽ��
  {
  test: /\.jsx$/,
  loaders: ['jsx', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
  }
ʾ��Դ��

����ĿĿ¼�£��½�һ��webpack.config.js�ļ�����������븴�ƽ�ȥ��Ȼ�����½�һ��app.js��index.js�ļ���д��console.log('�������');
ִ�����webpack Ȼ���ҵ�buildĿ¼�Ϳ����������ļ���
  var webpack = require('webpack');
  
  module.exports = {
	  entry: {
		  app: './app', //���������ļ�
		  index: './index', //���������ļ�
	  },
	  output: {
		  publicPath: '/build/', //��������·��
		  path: './build', //���뵽��ǰĿ¼
		  filename: '[name].js' //�������ļ�����
	  },
	  module: {
		  loaders: [{
				  test: /\.js$/,
				  loader: 'babel?presets=es2015'
			  }, {
				  test: /\.css$/,
				  loaders: ['style', 'css', 'autoprefixer']
			  }, {
				  test: /\.less/,
				  loaders: ['style', 'css', 'autoprefixer', 'less'],
			  }, {
				  test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
				  loader: 'file-loader?name=[hash].[ext]'
			  }, {
				  test: /\.(png|jpg)$/,
				  loader: 'url?limit=1200&name=[hash].[ext]' //ע������Ǹ�limit�Ĳ���������ͼƬ��СС��������Ƶ�ʱ�򣬻��Զ�����base64����ͼƬ
			  }
		  ]
	  },
	  plugins: [
			  new webpack.optimize.CommonsChunkPlugin('common.js') //������ģ�飬�����common.js
	  ],
	  resolve: {
		  extensions: ['', '.js', '.jsx'] //��׺���Զ���ȫ
	  }
  };