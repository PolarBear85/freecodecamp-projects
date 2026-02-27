def complementary_dna(strand):

    dna_match = {
        "A":"T",
        "T":"A",
        "G":"C",
        "C":"G"
    }

    dna_strand = [dna_match[gene] for gene in strand]
    print("".join(dna_strand))

    return "".join(dna_strand)

complementary_dna("ACGT")

'''
Complementary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".

Tests
Passed:1. complementary_dna("ACGT") should return "TGCA".
Passed:2. complementary_dna("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
Passed:3. complementary_dna("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
Passed:4. complementary_dna("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".

'''