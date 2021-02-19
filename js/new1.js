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



            <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxshowmap" ${showmapchecked}>

                     <label class="form-check-label" for="cbxshowmap"> Einsätze auf Karte ausblenden

            </div>



   <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxinvolved" ${involvedchecked}>

                     <label class="form-check-label" for="cbxinvolved"> Einsätze <b>MIT</b> eigener Beteiligung anzeigen

            </div>





   <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxuninvolved" ${uninvolvedchecked}>

                <label class="form-check-label" for="cbxuninvolved"> Einsätze <b>OHNE</b> eigener Beteiligung anzeigen

            </div>





   <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxpatients" ${patientschecked}>

                <label class="form-check-label" for="cbxpatients"> Einsätze mit Patienten anzeigen

            </div>





           <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxparamedic" ${paramedicchecked}>

                <label class="form-check-label" for="cbxparamedic"> Einsätze anzeigen wenn RD benötigt

            </div>



           <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxrecruitment" ${recruitmentchecked}>

                <label class="form-check-label" for="cbxrecruitment"> Einsätze anzeigen wenn Verstärkung benötigt

            </div>





           <div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxradio" ${radiochecked}>

                <label class="form-check-label" for="cbxradio"> Einsätze mit Sprechwunsch anzeigen

            </div>





<div class="form-group col-md-12">



                <input class="form-check-input" type="checkbox" value="" id="cbxminimize" ${minimizechecked}>

                <label class="form-check-label" for="ccbxminimize"> Einsatzliste  minimalisieren ( <a href="https://github.com/JuMaH0/lss/raw/master/minimizesh.user.js">Script MinimizeSH benötigt</a> )

            </div>







            <div class="clearfix"></div>

        </div>

        <div class="modal-footer">



            <button type="submit" id="savemissionsh" class="btn btn-success" >Speichern</button>

            <button type="button" class="btn btn-danger" data-dismiss="modal">Abbrechen</button>



        </div>

    </form>

</div>`);
