$("body").prepend(`

<div class="modal fade" id="emcModal" tabindex="-1" role="dialog" aria-labelledby="emcModalLabel" aria-hidden="true" style="z-index: 9999;">

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
      <input type="text" class="form-control form-control-sm" id="keyword" placeholder="Stichwort">
    </div>
  </div>
  <div class="form-group row">
    
    <div class="col-sm-10">
      <input type="text" class="form-control" id="caller" placeholder="Melder">
    </div>
  </div>
  <div class="form-group row">
    
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="location" placeholder="Ort">
    </div>
	</div>
	
	<div class="form-group row">
    
    <div class="col-sm-10">
       <textarea class="form-control" id="freetext" rows="3"  placeholder="Freitext"></textarea>
    </div>
  </div>
</form>
 
 <div class="clearfix"></div>

        </div>

        <div class="modal-footer">



            <button type="submit" id="saveemc" class="btn btn-success" >Speichern</button>

            <button type="button" class="btn btn-danger" data-dismiss="modal">Abbrechen</button>



        </div>

    </form>

</div>`);

$("body").on("click", "#saveemc", function () {
       var save = {};
	   
        save.keyword = $('#keyword')[0];
        save.caller = $('#caller')[0];
        save.lucation = $('#location')[0];
        save.freetext = $('#freetext')[0];
        
		alert(save.keyword)
        
        alert('Einsatz wird angelegt!');
        window.location.reload();
    });


