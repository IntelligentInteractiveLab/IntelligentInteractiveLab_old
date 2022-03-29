function footer_year() {
	var myDate = new Date();
	var tYear = myDate.getFullYear();

	$("#year").text(tYear);
}

function tocify() {
	tocbot.init({
		// 构建目录的容器
		tocSelector: '.toc',
		// 文章容器
		contentSelector: '.js-toc-content',
		// 需要解析的标题
		headingSelector: 'h1, h2, h3, h4',

		//实现滚动跟随
		// positionFixedSelector: '.toc',
		// positionFixedClass: 'is-position-fixed',
		// fixedSidebarOffset: 'auto',

		scrollSmooth: true,
		headingsOffset: 50,
		scrollSmoothOffset: -50,
		hasInnerContainers: true,

	});
}

function add_head_id(sellecter) {
	if (sellecter == null)
		sellecter = ".js-toc-content";

	var id = 1;
	// blogpost-body 为正文容器的 class，根据自己的情况修改
	$(sellecter).children("h1,h2,h3,h4,h5").each(function () {
		// 使用中文 id ，注意非ANSI编码文字会导致无法跳转
		var hyphenated = $(this).text().replace(/\s/g, '');
		// 英文id
		// var hyphenated = "myunique-" + id;
		$(this).attr('id', hyphenated);
		id++;
	});
}