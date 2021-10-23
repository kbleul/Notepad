
     var front_page_wrapper = document.getElementsByClassName("front_page_wrapper"); 
     var input_page_wrapper = document.getElementsByClassName("input_page_wrapper");
     var note_holder = document.getElementsByClassName("notes_page-all_note_holder");
     var form_header = document.getElementsByClassName("note_title");
    

     var add_note = document.getElementsByClassName("add_notes");
     var cancel_save = document.getElementsByClassName("cancel_save--list");
     
     var back_btn = document.getElementById("back_to notes_btn");
    
    

     
 
  const show_existing_notes = () => {

    console.log(window.localStorage.getItem("saved_counter") );

     let i = 1;

       if(i === parseInt(window.localStorage.getItem("saved_counter") ) )
       { console.log(i + "test2"); }

    while(i<= parseInt(window.localStorage.getItem("saved_counter") ) ){

        let notes = window.localStorage.getItem(i);
      document.getElementsByClassName("notes_page-all_note_holder")[0].prependChild(notes);

      console.log("hii test 2");
      
      i++;
    }  
   
  }  

  const show_input_form = () => {
    
      front_page_wrapper[0].style.display = "none";
      input_page_wrapper[0].style.display = "block";

  }

  


  const cancel_note = () => {
  
    
      let form_title = document.getElementById("input_title")
      let form_text = document.getElementById("input_note");

      form_text.value = "";
      form_title.value = "";

      front_page_wrapper[0].style.display = "block";
      input_page_wrapper[0].style.display = "none";
       // $("#preview").empty().html("<p>No image has been selected</p>");
       // document.getElementById("form").style.display = "none";
  }



  const showSavedNotes = event => {
    event.target.style.overflow = "visible";
  }

  const save_counter = () => {
    window.localStorage.setItem("saved_counter",
     document.getElementsByClassName("single_note_wrapper").length);

 console.log(document.getElementsByClassName("single_note_wrapper").length);
  //  window.localStorage.setItem("counter", 0);
    
  }

