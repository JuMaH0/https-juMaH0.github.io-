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
      <input type="text" class="form-control form-control-lg" id="lucation" placeholder="Ort">
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

var add_new_emc = function (mission_id, caller, keyword, location, freetext) {
            var emc = JSON.parse(localStorage.getItem('emc')) || [];
            emc.push({
                mission_id: mission_id,
                caller: caller,
                keyword: keyword,
                location: location,
                freetext: freetext
            });
            localStorage.setItem('emc', JSON.stringify(emc));
        }
		

$("body").on("click", "#saveemc", function () {
       
	   
	   
	   
        var keyword = document.getElementById('keyword').value;
        var caller = document.getElementById('caller').value;
        var lucation = document.getElementById('lucation').value;
        var freetext = document.getElementById('freetext').value;
		
		var emc = JSON.parse(localStorage.getItem('emc'));
		var openmission = window.location.pathname.replace(/\D+/g, '');
		var address = $('#mission_general_info').children('small').text().split('|')[0].trim();
		
		
                for (var isem = 0; isem < checkemc.length; isem++) {
                    if (openmission === checkemc[isem].mission_id) {
                        emc.splice([e], 1);
                        localStorage.setItem('emc', JSON.stringify(emc));
                    }
                }
            
		
			
		add_new_emc(openmission, caller, emc_text, keyword, lucation, freetext);
        
	
        
        alert('Einsatz wird angelegt!');
        window.location.reload();
    });


