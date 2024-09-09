// JogoDiaSemana.java
import java.time.LocalDate; 
import java.time.DayOfWeek;

//comandos acima, Java localiza em tempo real se é sabado oou domingo e quando o jogador erra o dia, é acusado! 

public class JogoDiaSemana {
    public String verificarDia(String diaEscolhido) {
        LocalDate dataAtual = LocalDate.now();
        DayOfWeek diaSemana = dataAtual.getDayOfWeek();

        if ((diaSemana == DayOfWeek.SATURDAY && diaEscolhido.equalsIgnoreCase("Sábado")) ||
            (diaSemana == DayOfWeek.SUNDAY && diaEscolhido.equalsIgnoreCase("Domingo"))) {
            return "Correto! Hoje é " + diaEscolhido;
        } else {
            return "Errado! Hoje não é " + diaEscolhido;
        }
    }
}

// esquema de loop aqui é o if e o else, onde quando jogador erra e acerta, o resultado ja vem na hora sendo assim, uma resposta rapida ao jogar. 