var tempnotes;
var editarea_html = '<input type="text" name="edit_title" id="edit_note" placeholder="Enter title" autofocus = true /><textarea name="edit_note" id="edit_note" rows="10" placeholder="Add memo..." required ></textarea>';

let orignal_section;
let par_temp ;
let title_temp;
var note_counter = 0;



$(document).ready(function(){
  
  let i_temp = 1;
  let counter_two = 0;
  let deletelist;

  while(i_temp <= parseInt(window.localStorage.getItem("saved_counter"))) {

    let notes = window.localStorage.getItem(i_temp);

    $(".front_page").hide();
    

     
    let section_creator = document.createElement("section");
         counter_two++;
    
    $(section_creator).addClass("single_note_wrapper").prepend(notes).click(function(){
      orignal_section = $(this);

     par_temp = $(this).find($(".note_txt") ).clone();
     title_temp = $(this).find($(".note_title")).clone();
    
      showSingleNote();

      });

          $(".notes_page-all_note_holder:eq(0)").prepend(section_creator).show();
          
          i_temp++;
    
  }

  $("#input_title").val("");
  $("#input_note").val("");

    //on save
    $(".cancel_save--list:eq(1)").click(function(){

      
        let form_title = $("#input_title").val();
        let form_text = $("#input_note").val();
   
          if(form_text == "" || form_text == null)
          {  $(".front_page_wrapper").css("display", "block");
             $(".input_page_wrapper").css("display", "none");
            
             $("#input_title").val("");
             $("#input_note").val("");
             return 0;
          }

          note_counter++;
        
      
          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth();
          let day = date.getDate();
  
            
          let minute = date.getMinutes();
          let hour = date.getHours();
    
  
      let time_stamp = `${day} / ${month} / ${year}`;
  
      let am_pm = hour>=12 ? "PM" : "AM";
      let time_stamp_two = `${hour}:${minute} ${am_pm} `;
       
      let time_paragraph = document.createElement("p");
      let time_paragraph_two = document.createElement("p");

       $(time_paragraph).text(time_stamp).css({
        "color" : "gray",
        "font-size" : "small"
       })
       $(time_paragraph_two).text(time_stamp_two).css({
        "color" : "gray",
        "font-size" : "small"
       })

    let time_wrapper = document.createElement("div");
       $(time_wrapper).append(time_paragraph_two)
       .append(time_paragraph).addClass("time_wrapper").css({
        "display" : "flex",
        "justify-content" : "space-between",
        "border-bottom" : "1px solid gray",
        "margin-left" : "2%",
        "margin-right" : "2%",
        "margin-bottom" : "0px"  
       });


    let note_paragraph = document.createElement("P");
     
     $(note_paragraph).text(form_text).addClass("note_txt").css({
      "font-size" : ".7rem",
      "margin-left" : "2%",
      "margin-right" : "2%",
      "max-height" : "3.4rem",
      "overflow" : "hidden"
     });

     let title_paragraph = document.createElement("p");

      $(title_paragraph).text(form_title).addClass("note_title").css({
        "font-size" : "1rem",
        "font-weight" : "bold",
        "margin-right" : "2%",
        "margin-left" : "2%",
        "padding-bottom" : "0px",
        "max-height" : "20px",
        "overflow" : "hidden",
        "text-align" : "center"

      });

      let single_note_wrapper = document.createElement("section");

      $(single_note_wrapper).prepend(time_wrapper);
  
      $(single_note_wrapper).prepend(note_paragraph).prepend(title_paragraph).addClass("single_note_wrapper");


        $(".notes_page-all_note_holder:eq(0)").prepend($(single_note_wrapper));
        $("#input_title").val("");
        $("#input_note").val("");

        $(".front_page").hide();
        $(".notes_page-all_note_holder:eq(0)").show();
        $(".front_page_wrapper").show();
             $(".input_page_wrapper").hide();
            
            let note_holder = $(single_note_wrapper).html();

            let counter_p = document.createElement("p");
            $(counter_p).text($(".single_note_wrapper").length).hide().addClass("counter_p");


      $(single_note_wrapper).prepend(counter_p);
   $(".single_note_wrapper").unbind()

   $(".single_note_wrapper").click(function(){

    orignal_section = $(this);

    par_temp = $(this).find($(".note_txt") ).clone();
    title_temp = $(this).find($(".note_title")).clone();

      showSingleNote();
   });

             window.localStorage.setItem($(".single_note_wrapper").length,  note_holder );

 $(".single_note_wrapper").click(showSingleNote);

});



    $("#back_to_notes_btn").click(function(){
      
      $(".note_dispay_zone").toggle();
      $(".note_display_wrapper").toggle();
      $(".notes_page-all_note_holder").toggle();
      $(".front_page_header").toggle();
      $("#save_edited").toggle();

    $(".note_txt").removeAttr("style").css({
      "font-size": "0.7rem",
      "margin-left": "2%",
      "margin-right": "2%",
      "max-height": "3.4rem",
      "overflow": "hidden"
    })
    });




  document.getElementById("menu_btn").addEventListener("click", 
  () => {
    $("#dropdown_menu").slideToggle(100)
  })

  document.getElementById("select_btn").addEventListener("click", 
  () => {
    $("#dropdown_menu").slideToggle(300);
    $("#knote").toggle(300);
    $("#delete_btn").toggle(500);
    $("add_notes").toggle(300);
    $("menu_btn").toggle(350);
    $("#cancel_select_btn").toggle(400);
    $(".svg_btn").toggle(300);

    appendCheckbox(false);

  })

  document.getElementById("selectall_btn").addEventListener("click", 
  () => {
    $("#dropdown_menu").slideToggle(300);
    $("#knote").toggle(300);
    $("#delete_btn").toggle(500);
    $("add_notes").toggle(300);
    $("menu_btn").toggle(350);
    $("#cancel_select_btn").toggle(400);
    $(".svg_btn").toggle(300);

    

    appendCheckbox(true);

  })

  document.getElementById("cancel_select_btn").addEventListener("click", 
  () => {
    $("#knote").toggle(300);
    $("#delete_btn").toggle(500);
    $("add_notes").toggle(300);preserveAspectRatio="xMidYMid meet"
    $("menu_btn").toggle(350);
    $("#cancel_select_btn").toggle(400);
    $(".svg_btn").toggle(300);


    $("#notes_holder").html(tempnotes);
    tempnotes = "";
    $(".single_note_wrapper").click(function(){

      orignal_section = $(this);
  
      par_temp = $(this).find($(".note_txt") ).clone();
      title_temp = $(this).find($(".note_title")).clone();
  
        showSingleNote();
     });

  })

  
  document.getElementById("delete_btn").addEventListener("click" , 
  () => {
    let seccounter = 0;
    let notesection = document.querySelectorAll(".notesection_wrapper");

   

    $("#knote").toggle(300);
    $("#delete_btn").toggle(500);
    $("add_notes").toggle(300);
    $("menu_btn").toggle(350);
    $("#cancel_select_btn").toggle(400);
    $(".svg_btn").toggle(300);


    deletelist = [];
    let checkbox = document.querySelectorAll(".checkbox");

    checkbox.forEach(tempcheck => {
      if($(tempcheck).is(":checked"))
      {   deletelist.push(seccounter);  }

    seccounter++;

    });

    deleteSelectedElements(deletelist);
  })


});

appendCheckbox = (selectall) => {

  tempnotes = $("#notes_holder").html();

    let notes = document.querySelectorAll(".single_note_wrapper");

    $("#notes_holder").html("");

  notes.forEach(note_section => {
    let div = document.createElement("div");
    let checkbox = document.createElement("input");
        $(checkbox).attr("type","checkbox").attr("class","checkbox");
  
        if(selectall) {  $(checkbox).prop("checked",true) }

        $(note_section).css("width","95%")
    $(div).append(checkbox).append(note_section).attr("class","edit_notesection_wrapper").css({
      "display" : "flex",
      "justify-content" : "space-between"
    });

    $("#notes_holder").append(div);

  });

}

deleteSelectedElements = (deleteitem_indexarr) => {


  let notesec = document.querySelectorAll(".single_note_wrapper");
  for(let i = 0 ; i < deleteitem_indexarr.length ; i++)
  {  $(notesec[deleteitem_indexarr[i]]).addClass("deletelist");  }
  
document.querySelectorAll('.deletelist').forEach(e => e.remove());
  notesec = document.querySelectorAll(".single_note_wrapper");


  let seccounter = 1;
  window.localStorage.clear();
   
     for(let i = notesec.length-1; i >= 0 ; i--)
     {
      window.localStorage.setItem(seccounter , $(notesec[i]).html() );
      seccounter++;
     }
     $("#notes_holder").html(notesec);
    
$(notesec).click(function(){
    orignal_section = $(this);
  par_temp = $(this).find($(".note_txt") ).clone();
  title_temp = $(this).find($(".note_title")).clone();
    showSingleNote();
 }).css("width" , "");
 



  
}

showSingleNote = () => {

    $("#dropdown_menu").hide(100)
    
  $(".notes_page-all_note_holder:eq(0)").hide();    
  $(".note_display_zone").empty().html(title_temp).append(par_temp).show().css("overflow-y" , "scroll");

  $(".note_display_wrapper").show();
  $(".front_page_header").hide();

  $(".note_txt").css({
    "max-height" : "none",
    "font-size" : ".9rem"
  })

  showEditForm_eventAdder();
   
  
}


showEditForm_eventAdder = () => {


     
      $("#note_display_zone").click(() => {

      let titleinput = document.createElement("input");
      $(titleinput).attr({
        "class" : "edittitle",
        "type" : "text",
        "name" : "input_title",
        "id" : "edit_title"
      })

      let noteinput = document.createElement("textarea");

      $(noteinput).attr({
        "name" : "input_note",
        "class" : "editnote",
        "id" : "edit_note"

      }).css({

      })


      $(titleinput).val($(title_temp).text());
      $(noteinput).val($(par_temp).text());
      $(".note_display_zone").first().html("").append(titleinput).append(noteinput);

      $("#note_display_zone").unbind().css("overflow-y" , "initial");;
   $("#save_edited").toggle(300);
   $("#save_edited").unbind();

   $("#save_edited").click(
    function(){
     $(this).toggle();
      saveNote();
    }
  )

      })

    }

saveNote = () => {
  $(orignal_section).remove();
 
  $(".note_display_zone").hide();
  $(".front_page_header").show();
  $(".note_display_wrapper").hide();
  
    let form_title = $("#edit_title").val();
    let form_text = $("#edit_note").val();

      if(form_text == "" || form_text == null)
      {  $(".front_page_wrapper").show();
         $(".input_page_wrapper").hide();
         $("#input_title").val("");
         $("#input_note").val("");
         return 0;
      }

      note_counter++;
    
  
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();

        
      let minute = date.getMinutes();
      let hour = date.getHours();


  let time_stamp = `${day} / ${month} / ${year}`;

  let am_pm = hour>=12 ? "PM" : "AM";
  let time_stamp_two = `${hour}:${minute} ${am_pm} `;
   
  let time_paragraph = document.createElement("p");
  let time_paragraph_two = document.createElement("p");
  $(time_paragraph).text(time_stamp).css({
    "color" : "gray",
    "font-size" : "small"
   })
   $(time_paragraph_two).text(time_stamp_two).css({
    "color" : "gray",
    "font-size" : "small"
   })

   let time_wrapper = document.createElement("div");
   $(time_wrapper).append(time_paragraph_two)
   .append(time_paragraph).addClass("time_wrapper").css({
    "display" : "flex",
    "justify-content" : "space-between",
    "border-bottom" : "1px solid gray",
    "margin-left" : "2%",
    "margin-right" : "2%",
    "margin-bottom" : "0px"  
   });


let note_paragraph = document.createElement("P");
 
 $(note_paragraph).text(form_text).addClass("note_txt").css({
  "font-size" : ".7rem",
  "margin-left" : "2%",
  "margin-right" : "2%",
  "max-height" : "3.4rem",
  "overflow" : "hidden",
 });

 let title_paragraph = document.createElement("p");

  $(title_paragraph).text(form_title).addClass("note_title").css({
    "font-size" : "1rem",
    "font-weight" : "bold",
    "margin-right" : "2%",
    "margin-left" : "2%",
    "padding-bottom" : "0px",
    "max-height" : "20px",
    "overflow" : "hidden",
    "text-transform": "capitalize",
    "text-align" : "center"
  });
  
  let single_note_wrapper = document.createElement("section");

  $(single_note_wrapper).prepend(time_wrapper);

  $(single_note_wrapper).prepend(note_paragraph).prepend(title_paragraph).addClass("single_note_wrapper");


    $(".notes_page-all_note_holder:eq(0)").prepend($(single_note_wrapper));
    $("#input_title").val("");
    $("#input_note").val("");

    $(".front_page").hide();
    $(".notes_page-all_note_holder:eq(0)").show();
    $(".front_page_wrapper").show();
         $(".input_page_wrapper").hide();
        
        let note_holder = $(single_note_wrapper).html();

        let counter_p = document.createElement("p");
        $(counter_p).text($(".single_note_wrapper").length).hide().addClass("counter_p");

   
  $(single_note_wrapper).prepend(counter_p)

  $(".single_note_wrapper").unbind()

  $(".note_txt").removeAttr("style").css({
    "font-size": "0.7rem",
    "margin-left": "2%",
    "margin-right": "2%",
    "max-height": "3.4rem",
    "overflow": "hidden"
  })

   $(".single_note_wrapper").click(function(){
            orignal_section = $(this);
          par_temp = $(this).find($(".note_txt") ).clone();
          title_temp = $(this).find($(".note_title")).clone();
            showSingleNote();
});

         window.localStorage.setItem($(".single_note_wrapper").length,  note_holder );

}

