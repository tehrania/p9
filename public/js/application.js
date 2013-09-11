$(document).ready(function(){

  $('.awesomeness_teller').on('click', function(e){
    e.preventDefault();
    var heading = $(this).attr("data-heading");
    awesome_heading(heading);
  });

  $('.meal_teller').on('click', function(e){
    e.preventDefault();
    $.ajax({
            url: "/meals",
            method:"get"
    }).done(function(){
      meal(main_meals);
    });
  });

  $('.skill_teller').on('click', function(e){
    e.preventDefault();
    // $.ajax({
    //         url: "/skills/:skill",
    //         method:"get"
    // }).done(function(){
      var skill = $(this).attr("data-name");
      console.log(skill)
      get_skills(skill);
    // });
  });

    function awesome_heading(heading){
      $("h2").html(heading);
    }

    function get_skills(skill){
      $("h2").html(skill);
    }


    function meal(main_meals){
      $("h2").html(main_meals);
    }

  });
