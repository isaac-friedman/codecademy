sample = ['GTA','GGG','CAC']

def read_dna(dna_file):
  dna_data = ""
  with open(dna_file, 'r') as f:
    for line in f:
      dna_data += line
  return dna_data

def codons(dna):
  codons = []
  for i in range(0,len(dna),3):
    if i+3 <= len(dna):
      codons.append(dna[i:i+3])
  return codons

def match_dna(dna):
  matches = 0
  for codon in dna:
    if codon in sample:
      matches += 1
  return matches

def is_criminal(dna_sample):
  data = read_dna(dna_sample)
  dna_codons = codons(data)
  count_matches = match_dna(dna_codons)
  if count_matches >= 3:
    print "There are %d matches in the sample. Continue investigating this character." % (count_matches)
  else:
    print "No match. Let him go."

is_criminal("suspect1.txt")
is_criminal("suspect2.txt")
is_criminal("suspect3.txt")
