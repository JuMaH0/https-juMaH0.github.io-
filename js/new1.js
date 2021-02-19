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


<form>
  <div class="form-group row">
    
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Stichwort">
    </div>
  </div>
  <div class="form-group row">
    
    <div class="col-sm-10">
      <input type="text" class="form-control" id="colFormLabel" placeholder="Melder">
    </div>
  </div>
  <div class="form-group row">
    
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Ort">
    </div>
	
	<div class="form-group row">
    
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Beschreibung / Freitext">
    </div>
  </div>
</form>
 
 <div class="clearfix"></div>

        </div>

        <div class="modal-footer">



            <button type="submit" id="savemissionsh" class="btn btn-success" >Speichern</button>

            <button type="button" class="btn btn-danger" data-dismiss="modal">Abbrechen</button>



        </div>

    </form>

</div>`);


