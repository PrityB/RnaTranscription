
function RnaTranscription() {
   jv_Object.call(this);
}

var RnaTranscription_c = sc_newClass("RnaTranscription", RnaTranscription, jv_Object, null);

RnaTranscription_c.main = function (args)  {
   RnaTranscription_c.transcribe("CGTATACG");
};
RnaTranscription_c.transcribe = function (dnaStrand)  {
   var rnaStrand = "";
   var rnaStrandf = "";
   var dnaArray = dnaStrand.toCharArray();
   {
      var _lv = dnaArray;
      for (var _i = 0; _i < _lv.length; _i++) {
         var letter = dnaArray[_i];
         switch(letter) {
            case 'C':
               rnaStrand = "G";
               break;
            case 'G':
               rnaStrand = "C";
               break;
            case 'T':
               rnaStrand = "A";
               break;
            case 'A':
               rnaStrand = "U";
               break;
            default :
               rnaStrand = "";
               break;
         }
         rnaStrandf = rnaStrandf + rnaStrand;
      }
   }
   jv_System_c.out.println(rnaStrandf);
   return rnaStrandf;
};
