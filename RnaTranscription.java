public class RnaTranscription{
  public static void main(String args[]){
    transcribe("CGTATACG");
  }
public static String transcribe(String dnaStrand) {
        String rnaStrand = "";
        String rnaStrandf = "";
        char[] dnaArray = dnaStrand.toCharArray();
       
        for (char letter : dnaArray) {
                switch (letter) {
                case 'C': rnaStrand = "G";
                        break;
                case 'G': rnaStrand = "C";
                        break;
                case 'T': rnaStrand = "A";
                        break;
                case 'A': rnaStrand = "U";
                        break;
                default: rnaStrand = "";
                        break;
                }

                rnaStrandf =  rnaStrandf + rnaStrand;

        }
        System.out.println(rnaStrandf);
return rnaStrandf;
}

}