let ourText = "1979 | Convenção - Eliminação de Todas as Formas de Discriminação contra as Mulheres (ONU)\n1993 | Declaração da Eliminação da Violência contra as Mulheres (ONU)\n1995 | IV Conferência Mundial sobre a Mulher - Declaração de Beijing (China)\n2000 | Resolução 1325 - Participação Feminina na Prevenção e Resolução de Conflitos (ONU)\n2015 | Objetivos de Desenvolvimento Sustentável - Igualdade de Género até 2030 (ONU)\n2017 | 3.5 a 5.5 Milhões de pessoas participam na 'Marcha das Mulheres'";


class DataElement {
  
    constructor (ano, numero_alunas, cor) 
    {
      this.ano = ano;
      this.numero_alunas = numero_alunas;
      this.cor  = cor;
      this.tamanho = 20;
      
      this.pos = 0;
    }
  
  
    animDataElement() 
    {
      if (this.pos > this.escala) this.pos--;
      else 
      if (this.pos < this.escala) this.pos++;
    }

  
    drawDataElement (pos) 
    {
      this.margem = 150;
      
      if (device_orientation === "l") 
      {
        fill(0);
        textSize(40);
        textAlign (CENTER, CENTER);
        text("A História dos Direitos das Mulheres", width/2, this.margem); 
        

        fill(25);
        textSize(20);
        textAlign (CENTER, CENTER);
        text(ourText, 0, height/2+this.margem/2, width, height/2);
        
        this.escala = map (this.numero_alunas, 34000, 212000, height/2-this.margem*2, -height/2+this.margem*2);

        ellipseMode(CENTER);
        fill(this.cor);

        push();
          translate (0, height/2)
          ellipse(pos, this.pos, this.tamanho);
        pop();
        
        
      }
      
      else 
      
      if (device_orientation === "p") 
      {
        
        fill(0);
        textSize(20);
        textAlign (CENTER, CENTER);
        text("A História dos Direitos das Mulheres", width/2, this.margem); 
        
        this.escala = map (this.numero_alunas, 34000, 212000, width/2-this.margem, -width/2+this.margem);
        ellipseMode(CENTER);
        fill(this.cor);

        push();
          translate (width/2, 0)
          ellipse(this.pos, pos, this.tamanho);
        pop();
        
        fill(25);
        textSize(12);
        textAlign (CENTER, CENTER);
        text(ourText, 0, height/2+this.margem/1.5, width, height/2);
        
      }
    }
  
    drawText() 
    {
      //
    }
}