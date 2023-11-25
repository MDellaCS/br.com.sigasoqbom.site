package br.com.sigasoqbom.sigasoqbomsite.model;

public enum Turno {
   MANHA("Manhã"),
   TARDE("Tarde"),
   NOITE("Noite");

   private String nome;

   private Turno(String nome) {
      this.nome = nome;
   }

   public String getNome() {
      return nome;
   }

   public void setNome(String nome) {
      this.nome = nome;
   }
}
