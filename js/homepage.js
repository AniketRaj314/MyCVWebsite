$(document).ready(function(){
    $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
    });
    $(".hideproj").hide();
    $(".hidework").hide();
    $(".hideedu").hide();
    new WOW().init();
    var info = [
                  {
                    header : "Sports",
                    para : "I play badminton and table tennis regularly.<br>In terms of watching sports, I have interest in football and I support Real Madrid",
                    footer : "I was a state level table tennis player (under 13)"
                  },
                  {
                    header : "Comic Books",
                    para : "I have been reading comic books since forever, be it original copies or an e-comic book.<br>I feel DC has better art concepts and a great storyline.",
                    footer : "I had collected 51 issues of The Amazing Spider-Man but I lost them while shifting :("
                  },
                  {
                    header : "Music",
                    para : "I am comfortable with almost every genre but EDM has amazed me over the years.<br>Apart from that, the songs of Linkin Park, Eminem, Coldplay, and many others have helped me get through everything and made me what I am today.",
                    footer : "I can play the keyboard and looking forward to learn to play the guitar :)"
                  },
                  {
                    header : "Gaming",
                    para : "I prefer a story-based game more than online competative games.<br>GTA series, Uncharted 4, Assassin's Creed are some of the games which I could play all day.",
                    footer : "I still play retro games like Mario, Pacman and would want to own a retro gaming machine some day!"
                  }
                ];

    $(".hobby-list p").click(function(){
      var num = $(this).index();
      $("#hobby-header").text(info[num].header);
      $("#hobby-content").html(info[num].para);
      $("#hobby-fact").text(info[num].footer);
      $("#id01").css({"display":"block"});
    });
    $("#id01").click(function(){
      $(this).css({"display":"none"});
    });
    $("#sport").click(function(){
      $("#id01").css({"display":"block"});
    });

    $("#hideprojbutton").click(function(){
      $(".hideproj").fadeToggle(500);
      $(this).text() == 'Show More' ? $(this).text('Show Less') : $(this).text('Show More'); 
    });
    $("#hideedubutton").click(function(){
      $(".hideedu").fadeToggle(500);
      $(this).text() == 'Show More' ? $(this).text('Show Less') : $(this).text('Show More'); 
    });
    $("#hideworkbutton").click(function(){
      $(".hidework").fadeToggle(500);
      $(this).text() == 'Show More' ? $(this).text('Show Less') : $(this).text('Show More'); 
    });
    $("hideworkbutton").dblclick(function(){
      alert("Yep, it works");
    });
  });