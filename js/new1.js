$("body").prepend(`

<div class="modal fade" id="missionshModal" tabindex="-1" role="dialog" aria-labelledby="missionshModalLabel" aria-hidden="true" style="z-index: 9999;">

  <div class="modal-dialog modal-dialog-centered" role="document">

   <div class="modal-content">

    <form id="role-form"  method="get">

        <div class="modal-header" style="border-bottom: 0px;">

            <button type="button" class="close" data-dismiss="modal">&times;</button>



            <h4 class="modal-title"></h4>

        </div>

        <div class="modal-body">


<div class="form-group">
          <input class="form-control" type="text" placeholder="Default input">
		  </ div>
		  
		  <div class="form-group">
<input class="form-control" type="text" placeholder="Default input">
</ div>

<div class="form-group">
<input class="form-control" type="text" placeholder="Default input">
   </div>

<div class="form-group">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Default input"></textarea>
	</div>
  </div>



   





   





          




















            <div class="clearfix"></div>

        </div>

        <div class="modal-footer">



            <button type="submit" id="savemissionsh" class="btn btn-success" >Speichern</button>

            <button type="button" class="btn btn-danger" data-dismiss="modal">Abbrechen</button>



        </div>

    </form>

</div>`);
