<script>

function DeleteENCF() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet=ss.getSheetByName('Candidats')

  var Avals = ss.getRange("A1:A").getValues();
  var LastLine = Avals.filter(String).length;
 
  var Libelle=sheet.getRange(1,1,1,50).getValues()[0]
  var I_cl=-1
  for (i=0; i<50;i++){
    if(Libelle[i]=='Classement'){
      I_cl=i
    }
  }
  var values = sheet.getRange(I_cl,2,LastLine).getValues();
  for( i=values.length;i>0;i--){

    if(values[i]=='ENCF' ){
      sheet.deleteRows(i+1)
    }
  }
};

function toNumber(entry){
  if(entry==''){
    return(0)
  }
  if(entry==undefined){
    return(0)
  }
  else{
    return(parseFloat(entry))
  }

}

function doubletteAbrege(str){

var abrege={
  "PHYSIQUE-CHIMIE":'PC',
  "MATHEMATIQUES":"M",
  "SCIENCES DE LA VIE ET DE LA TERRE":"SVT"
}
if(abrege[str]!=undefined){
  return(abrege[str])
}
else{
  return( str)
}
}

function SeparateLyceeReorientation(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetCandidat=ss.getSheetByName('Candidats')


/* Obtenir les numeros des colonnes qui nous interessent */
  var Libelle=sheetCandidat.getRange(1,1,1,100).getValues()[0]
  var I_type=-1
  var I_niveau=-1
  var I_codeCandidat=-1
  var I_codeLycee=-1
  var I_philo=-1
    var I_LV1=-1
  var I_MathSpe=-1
  var I_SVTSpe=-1
    var I_PCSpe=-1
  var I_MathComp=-1
  var I_MathExp=-1
    var I_FREcrit=-1
  var I_FROral=-1
  var I_EDSMath1ere=-1
  var I_EDSPC1ere=-1
  var I_EDSVT1ere=-1
  var I_doublette=-1
  var I_reorientation=-1
  var I_Pays=-1
  for (i=0; i<100;i++){
    if(Libelle[i]=="Type Etablissement d'origine - Libellé 2023/2024"){
      I_type=i
    }
        if(Libelle[i]=="Niveau Etude - Libellé 2023/2024"){
      I_niveau=i
    }
    if(Libelle[i]=="Candidat - Code"){
      I_codeCandidat=i
    }
    if(Libelle[i]=="UAI Etablissement origine 2023/2024"){
     I_codeLycee=i
    }
    if(Libelle[i]=="Moyenne Candidat - Philosophie"){
      I_philo=i
    }
        if(Libelle[i]=="Moyenne Candidat - Langue vivante A"){
      I_LV1=i
    }  
    if(Libelle[i]=="Moyenne Candidat - Mathématiques Spécialité"){
      I_MathSpe=i
    } 
    if(Libelle[i]=="Moyenne Candidat - Physique-Chimie Spécialité"){
      I_PCSpe=i
    }
    if(Libelle[i]=="Moyenne Candidat - Sciences de la vie et de la Terre Spécialité"){
      I_SVTSpe=i
    }
      if(Libelle[i]=="Moyenne Candidat - Mathématiques Expertes"){
      I_MathExp=i
    }   
      if(Libelle[i]=="Moyenne Candidat - Mathématiques Complémentaires"){
      I_MathComp=i
    }   
      if(Libelle[i]=="Note de l'épreuve - Français écrit"){
      I_FREcrit=i
    }   
      if(Libelle[i]=="Note de l'épreuve - Français oral"){
      I_FROral=i
    }     
  
        if(Libelle[i]=="Note de l'épreuve - Physique-Chimie  (EDS suivi uniquement en 1ère)"){
      I_EDSPC1ere=i
    }     
  
        if(Libelle[i]=="Note de l'épreuve - Mathématiques (EDS suivi uniquement en 1ère)"){
      I_EDSMath1ere=i
    }     
  
        if(Libelle[i]=="Note de l'épreuve - Sciences de la Vie et de la Terre  (EDS suivi uniquement en 1ère)"){
      I_EDSVT1ere=i
    }   

    if(Libelle[i]=="EDS Scolarité Terminale 1 - Libellé BCN"){
      I_doublette=i
    }    



    if(Libelle[i]=="Formation Domaine - Libellé 2023/2024"){
      I_reorientation=i
    } 

        if(Libelle[i]=="Pays Etablissement origine - Libellé 2023/2024"){
      I_Pays=i
    }     






/* Obtenir un objet JS, du type :{codelycee:note} */
      var sheetLycee=ss.getSheetByName('Lycées')
    var LastLineLycee = sheetLycee.getLastRow()
    var LastColumnLycee = sheetLycee.getLastColumn()
     var valuesLycee = sheetLycee.getRange(1,1,LastLineLycee,LastColumnLycee).getValues();
     var Lycee={}
  for (i=0; i<valuesLycee.length;i++){
    Lycee[valuesLycee[i][1]]=valuesLycee[i][5]
  }




/* Classer les candidats */
    var Candidat=Array();

  var LastLine = sheetCandidat.getLastRow()
  var LastColumn = sheetCandidat.getLastColumn()

    var values = sheetCandidat.getRange(1,1,LastLine,LastColumn).getValues();

      var Header=values[0].slice(4)
      Header.unshift('GR modifie','Gr Algo','Remarques','NoteGlobale','NoteFR','rgFR','NoteSC','rgSc','NoteLycee','Doublette')
      Candidat.push(Header)

  for( i=1;i<values.length;i++){
    if(values[i][I_type]=="Lycée général et technologique" && values[i][I_niveau]=="Terminale" ){
       var Remarques=""
      var noteFR=values[i][I_FREcrit]+values[i][I_FROral]+values[i][I_philo]+values[i][I_LV1]
      
      var rangFR=values[i][I_philo+1]/values[i][I_philo+2]+values[i][I_LV1+1]/values[i][I_LV1+2]
      
      var NoteSC=toNumber(values[i][I_EDSPC1ere])+toNumber(values[i][I_EDSVT1ere])+toNumber(values[i][I_EDSMath1ere])+toNumber(values[i][I_MathSpe])+toNumber(values[i][I_PCSpe])+toNumber(values[i][I_SVTSpe])
      
      if(toNumber(values[i][I_EDSPC1ere])+toNumber(values[i][I_EDSVT1ere])+toNumber(values[i][I_EDSMath1ere])<10){
        Remarques+="Note Science 1ere"
      }


      var rangSc=toNumber(values[i][I_MathSpe+1])+toNumber(values[i][I_PCSpe+1])+toNumber(values[i][I_SVTSpe+1])
      


      var MathComp=values[i][I_MathComp]
      var MathExp=values[i][I_MathExp]
      var NoteGlobale=noteFR+NoteSC
      var NoteLycee=Lycee[values[i][I_codeLycee]]


      var Doublette = doubletteAbrege(values[i][I_doublette])+'-'+doubletteAbrege(values[i][I_doublette+1])

      if(Doublette=='PC-SVT' && toNumber(MathComp)<10){
        Remarques+='-pb math comp'
      }

      if(Doublette!='PC-SVT' && Doublette!='M-PC' && Doublette!='M-SVT'){
        Remarques+="-Pb Doublette"
      }
      var data=values[i].slice(4)
      
     data.unshift('','',Remarques,NoteGlobale,noteFR,rangFR,NoteSC,rangSc,NoteLycee,Doublette)
      
      Candidat.push(data)

    }else{
      /* Medecine */
      if(values[i][I_niveau]=="1ère année d'études supérieures" && values[i][I_reorientation]=="Licence - Sciences - technologies - santé"){

        var Remarques=""
      var noteFR=values[i][I_FREcrit]+values[i][I_FROral]
      var NoteSC=toNumber(values[i][I_EDSPC1ere])+toNumber(values[i][I_EDSVT1ere])+toNumber(values[i][I_EDSMath1ere])
      var NoteGlobale=NoteSC+NoteSC
       var Doublette = doubletteAbrege(values[i][I_doublette])+'-'+doubletteAbrege(values[i][I_doublette+1])
      if(Doublette!='PC-SVT' && Doublette!='M-PC' && Doublette!='M-SVT'){
        Remarques+="-Pb Doublette"
      }
      var data=values[i].slice(4)
      data.unshift('','',Remarques,NoteGlobale,noteFR,'',NoteSC,'',"Medecine",Doublette)
      Candidat.push(data)
      }
      else{
/* Prepa */
        if(values[i][I_niveau]=="1ère année d'études supérieures" && values[i][I_reorientation]=="Classe préparatoire scientifique"){

        var Remarques=""
      var noteFR=values[i][I_FREcrit]+values[i][I_FROral]
      var NoteSC=toNumber(values[i][I_EDSPC1ere])+toNumber(values[i][I_EDSVT1ere])+toNumber(values[i][I_EDSMath1ere])
      var NoteGlobale=NoteSC+NoteSC
       var Doublette = doubletteAbrege(values[i][I_doublette])+'-'+doubletteAbrege(values[i][I_doublette+1])
      if(Doublette!='PC-SVT' && Doublette!='M-PC' && Doublette!='M-SVT'){
        Remarques+="-Pb Doublette"
      }
      var data=values[i].slice(4)
      data.unshift('','',Remarques,NoteGlobale,noteFR,'',NoteSC,'',"Prepa",Doublette)
      Candidat.push(data)
      }
      else{
         if(values[i][I_niveau]=="1ère année d'études supérieures" && values[i][I_reorientation]=="Classe préparatoire scientifique"){

        var Remarques=""
      var noteFR=values[i][I_FREcrit]+values[i][I_FROral]
      var NoteSC=toNumber(values[i][I_EDSPC1ere])+toNumber(values[i][I_EDSVT1ere])+toNumber(values[i][I_EDSMath1ere])
      var NoteGlobale=NoteSC+NoteSC
       var Doublette = doubletteAbrege(values[i][I_doublette])+'-'+doubletteAbrege(values[i][I_doublette+1])
      if(Doublette!='PC-SVT' && Doublette!='M-PC' && Doublette!='M-SVT'){
        Remarques+="-Pb Doublette"
      }
      var data=values[i].slice(4)
      data.unshift('','',Remarques,NoteGlobale,noteFR,'',NoteSC,'',"Prepa",Doublette)
      Candidat.push(data)
      }
      else{
      var data=values[i].slice(4)
     data.unshift('','','','','','','','','','')
      Candidat.push(data)
      }
      }
    }
    
  }
  

  var sheet=ss.getSheetByName('CLASSEMENT')
  var cell=sheet.getRange(1,1,values.length,Candidat[1].length)
  cell.setValues(Candidat)



}








</script>