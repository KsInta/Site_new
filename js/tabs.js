$("#tabs.tabs--mi-skazochniki>.tabs__link-wrapper>a").click( function () {

        $("#tabs.tabs--mi-skazochniki>.tabs__link-wrapper>a").removeClass("current");
        $(this).addClass("current");

        $(".tabs_content>div").hide();
        t_content=$(this).attr("href");
        $(t_content).show();

        return false
    })
$("#tabs.tabs--mi-skazochniki>.tabs__link-wrapper>a:first").trigger("click");
