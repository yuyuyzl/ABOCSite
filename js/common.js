$(document).ready(function () {
    $("#navmarker").before(
        "<nav class=\"navbar navbar-expand-md navbar-light bg-white fixed-top\" id=\"navmain\">\n" +
        "    <a class=\"navbar-brand\" href=\"/index.html\">\n" +
        "        <img class=\"logowhite\" src=\"/img/navlogo.png\" height=\"30\" alt=\"\">\n" +
        "        <img class=\"logoblack\" src=\"/img/navlogoblack.png\" height=\"30\" alt=\"\">\n" +
        "    </a>\n" +
        "    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "        <span class=\"navbar-toggler-icon\"></span>\n" +
        "    </button>\n" +
        "    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n" +
        "        <ul class=\"navbar-nav ml-auto\">\n" +
        "            <li class=\"nav-item\">\n" +
        "                <a class=\"nav-link\" href=\"#\">美食之味</a>\n" +
        "            </li>\n" +
        "            <li class=\"nav-item\">\n" +
        "                <a class=\"nav-link\" href=\"#\">风土人情</a>\n" +
        "            </li>\n" +
        "            <li class=\"nav-item\">\n" +
        "                <a class=\"nav-link\" href=\"#\">舌尖之道</a>\n" +
        "            </li>\n" +
        "            <li class=\"nav-item\">\n" +
        "                <a class=\"nav-link\" href=\"/innerPages/about.html\">关于我们</a>\n" +
        "            </li>\n" +
        "        </ul>" +
        "\n" +
        "    </div>\n" +
        "</nav>");

    $("#footermarker").after(
        "<div class=\"jumbotron jumbotron-fluid footer text-white\" style=\"padding-top: 100px\">\n" +
        "    <div class=\"container\">\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-3\">\n" +
        "                <img src=\"/img/navlogo.png\" height=\"30\" alt=\"\">\n" +
        "            </div>\n" +
        "            <div class=\"col\">\n" +
        "                <h5 class=\"font-weight-bold\">美食之味</h5>\n" +
        "                <p><a href=\"#\" class=\"text-white\">获取食材</a></p>\n" +
        "                <p><a href=\"#\" class=\"text-white\">烹饪艺术</a></p>\n" +
        "                <p><a href=\"#\" class=\"text-white\">食用和储存</a></p>\n" +
        "            </div>\n" +
        "            <div class=\"col\">\n" +
        "                <h5 class=\"font-weight-bold\">风土人情</h5>\n" +
        "                <p><a href=\"#\" class=\"text-white\">因地制宜的智慧</a></p>\n" +
        "                <p><a href=\"#\" class=\"text-white\">美食背后的情感</a></p>\n" +
        "                <p><a href=\"#\" class=\"text-white\">连接华夏的美食</a></p>\n" +
        "                <p><a href=\"#\" class=\"text-white\">美食里凝结的文化</a></p>\n" +
        "        </div>\n" +
        "            <div class=\"col\">\n" +
        "                <h5 class=\"font-weight-bold\">舌尖之道</h5>\n" +
        "                <p><a href=\"#\" class=\"text-white\">我们眼中的《舌尖》</a></p>\n" +
        "            </div>\n" +
        "            <div class=\"col\">\n" +
        "                <h5 class=\"font-weight-bold\">关于我们</h5>\n" +
        "                <p><a href=\"#\" class=\"text-white\">小组成员</a></p>\n" +
        "                <p><a href=\"#\" class=\"text-white\">技术简介</a></p>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>");
});