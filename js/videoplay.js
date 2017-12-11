var needClear=true;

var warpComment=function(name,comment,time){
    return "<div class=\"commentArea\">\n" +
        "            <hr style=\"border-color: #ccc;\">\n" +
        "                <div style=\"border-left : solid 5px #aaa;padding-left: 10px\">\n" +
        "                    <p><b>"+name+"</b><span style=\"color: #999;padding-left: 10px\">"+time+"</span></p>\n" +
        "                    <p>"+comment+"</p>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>";
}

$(document).ready(function () {
    var snum=parseInt(window.location.href.split('?')[1]);
    var playersList= {
        12: {
            html: "<iframe src=\"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?autoplay=false&vid=2ced37b6ee248d8bbe49812c79d3f933&tvId=110481400&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第一季第2集 主食的故事",
            summary: "主食是餐桌上的主要食物，是人们所需能量的主要来源。从远古时代赖以充饥的自然谷物到如今人们餐桌上丰盛的、让人垂涎欲滴的美食，一个异彩纷呈、变化多端的主食世界呈现在你面前。本集着重描绘不同地域、不同民族、不同风貌的有关主食的故事，展现人们对主食的样貌、口感的追求，处理和加工主食的智慧，以及中国人对主食的深厚情感。"
        },
        13: {
            html: "<iframe src=\"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=6b11a7e768cfe05e607691a20cda5a81&tvId=110482300&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第一季第3集 转化的灵感",
            summary: "腐乳、豆豉、黄酒、泡菜，都有一个共同点，它们都具有一种芳香浓郁的特殊风味。这种味道是人与微生物携手贡献的成果。而这种手法被称作“发酵”。中国人的老祖宗，用一些坛坛罐罐，加上敏锐的直觉，打造了一个食物的新境界。要达到让食物转化成美食的境界，这其中要逾越障碍，要营造条件，要把握机缘，要经历挫败，从而由“吃”激发出最大的智慧。"
        },
        14: {
            html: "<iframe src=\"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=cc06be2b13372ccbef91fcbb39171406&tvId=110482400&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第一季第4集 时间的味道",
            summary: "腌制食品，风干晾晒的干货，以及酱泡、冷冻等是中国历史最为久远的食物保存方式。时至今日，中国人依然对此类食品喜爱有加。本集涉及的美食主要有腊肉，火腿，烧腊，咸鱼(腌鱼)，腌菜，泡菜，渍菜，以及盐渍，糖渍，油浸，晾晒，风干，冷冻等不同食物保存方法，展现以此为基础和原材料的各种中国美食。"
        },
        15: {
            html: "<iframe src=\"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=2667ffe516a1ca5a44059a70fa213975&tvId=110482800&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第一季第5集 厨房的秘密",
            summary: "与西方“菜生而鲜，食分而餐”的饮食传统文化相比，中国的菜肴更讲究色、香、味、形、器。而在这一系列意境的追逐中，中国的厨师个个都像魔术大师，都能把“水火交攻”的把戏玩到如火纯青的地步，这是8000年来的修炼。我们也在这漫长的过程中经历了煮、蒸、炒三次重要的飞跃，他们共同的本质无非是水火关系的调控，而至今世界上懂得蒸菜和炒菜的民族也仅此一家。"
        },
        16: {
            html: "<iframe src=\"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=fb79e2de9f1c9635758760dd1d5a1fa1&tvId=110482900&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第一季第6集 五味的调和",
            summary: "中国饮食素有“味”是灵魂之说。不同的原材料，不同的调味品，不同的调制手法，不同的调味大师，引领食物到达更加美味的境界。咸鲜，甜咸，酸甜，酸辣，麻辣，香辣，苦香，鲜香……每一种美食，经过中国人的精心烹饪制作，呈现了不同的味型与气质。本集要探究中国人烹制各种口味所需不同调味料，展示丰富的调味料的制作工艺，解密中国人高超的调味技术。"
        },
        17: {
            html: "<iframe src=\"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=72338e874427ea21e298f3d5620977f8&tvId=110483100&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第一季第7集 我们的田野",
            summary: "作为最后一集，本集将带领观众完成一个回归——从餐桌回归大地。以餐桌上的美食为出发点，继而将视线投向生产出各种美食原材的广袤田野，探究美食的来源，它们是如何被人类以各种方式培育出来，并突出体现生态环保的农业生产方式，正是这样的方式才能为美食提供至关重要的品质保证——优良和清洁。"
        },
        21: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1725134_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第1集 脚步",
            summary: "汗水中的苦辣酸甜。“路菜”是先人保存食物的智慧，进而被演化成标志性的中国美食。味觉记忆的强大，往往让人们对故乡食物的迷恋十分牢固，甚至被赋予“乡愁”这样的文学语汇。"
        },
        22: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1737838_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第2集 心传",
            summary: "即将消失的美味。中国传统烹饪在手艺上无比神秘、繁复，它的传承和流变往往以家族或师徒的形式承载。《舌尖上的中国2》第二集《心传》，引领我们再次面向民间，寻找那些消失的和即将消失的美味。"
        },
        23: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1748512_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第3集 时节",
            summary: "中国人对自然的依赖与敬畏。通过捕捉节令美食，展现传统中国人对自然的依赖与敬畏，表达我们对气候变幻的敏锐感知。“不时，不食”是中国人饮食最重要的特征。"
        },
        24: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1760770_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第4集 家常",
            summary: "家中的甜酸苦辣。走入寻常百姓家，讲述的是对老百姓来说最普通的菜品，是每个人都念念不忘的妈妈的味道，让你琳琅满目的淳朴佳肴击中，感受浓浓暖意。"
        },
        25: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1773910_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第5集 相逢",
            summary: "食材之间的缘分。食物跨越千山万水的邂逅，成就舌尖上的享受。记录了人促进食物的相聚，以及美食承载的人们聚散离合的记忆。"
        },
        26: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1785638_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第6集 秘境",
            summary: "隐秘美食；在幅员辽阔的中国，有许多奇异丰盛的美食隐匿在山野之间。茂密的森林、广袤的草原、湍急的河流与干旱的沙漠……在这些人间秘境的角落，一群美味的精灵不仅活跃着人们的餐桌，更维系着人与自然之间的和谐。"
        },
        27: {
            html: "<iframe src=\"http://tv.sohu.com/upload/static/share/share_play.html#1799969_6436703_0_8_1\" frameborder=\"0\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></iframe>",
            name: "第二季第7集 三餐",
            summary: "自汉代之始华夏大部分地区已形成了早、午、晚三餐的饮食制度。在同样的饮食制度下，中国人可以活出了不同的节奏，让餐桌的色彩成就对生活渗透。"
        }
    };

    if(!playersList[snum])window.location.href='404.html';
    $("#videocontainer").append(playersList[snum].html);
    $("#videoname").append(playersList[snum].name);
    $("#videosummary").append(playersList[snum].summary);
    $("#videocontainer iframe").height("600px");

    var comments=JSON.parse($.ajax({url:"/getComment?"+snum,async:false}).responseText);
    console.log(comments);

    for(var i=0;i<comments.length;i++)$("#commentContainer").prepend(warpComment(comments[i].name,comments[i].comment,comments[i].time));

    $("#btnSubmit").click(function () {
        $(".alert").alert("close");
        if($("#textName").val()!=null && $("#textName").val().length>0 && $("#textComment").val()!=null && $("#textComment").val().length>0){
            var res=$.ajax({url:"/addComment?"+snum+"&"+$("#textName").val()+"&"+$("#textComment").val(),async:false});
            console.log(res.responseText);
            if(res.responseText=="发表评论成功") {
                $("#commentContainer").prepend(warpComment($("#textName").val(), $("#textComment").val(), (new Date()).getFullYear() + "-" + (parseInt((new Date()).getMonth()) + 1) + "-" + (new Date()).getDate()));
                $("#textComment").val("");
            }else {

                $("#commentContainer").before("<div class=\"alert alert-danger\" role=\"alert\">\n" +
                    "        操作太过频繁，请30秒后再试\n" +
                    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "            <span aria-hidden=\"true\">&times;</span>\n" +
                    "        </button>\n" +
                    "    </div>");
            }
        }else {
            $("#commentContainer").before("<div class=\"alert alert-danger\" role=\"alert\">\n" +
                "        评论内容和昵称不能为空\n" +
                "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "            <span aria-hidden=\"true\">&times;</span>\n" +
                "        </button>\n" +
                "    </div>");
        }

    });


});