function complementaryDNA(strand) {

   const dnaMatch = {
        "A":"T",
        "T":"A",
        "G":"C",
        "C":"G"
    }

    const dnaStrand = strand.split("").map(gene => dnaMatch[gene]).join("")

    console.log(dnaStrand)

  return dnaStrand;
}

complementaryDNA("ACGT")

/*
Complementary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".

Tests
Passed:1. complementaryDNA("ACGT") should return "TGCA".
Passed:2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
Passed:3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
Passed:4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".
*/