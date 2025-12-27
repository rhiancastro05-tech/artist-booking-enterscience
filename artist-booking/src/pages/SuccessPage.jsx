import { useNavigate } from "react-router-dom";
import { CheckCircle, Home, Calendar } from "lucide-react";
import "../styles/SuccessPage.css";

/**
 * SuccessPage Component
 * Success confirmation page after booking submission
 */
function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-card">
          {/* Success Icon */}
          <div className="success-icon">
            <CheckCircle size={80} />
          </div>

          {/* Success Message */}
          <h1 className="success-title">Reserva enviada!</h1>
          <p className="success-message">
            Sua solicitação de reserva foi enviada com sucesso. O artista será
            notificado e entrará em contato em breve.
          </p>

          {/* Action Buttons */}
          <div className="success-actions">
            <button
              className="action-button primary"
              onClick={() => navigate("/")}
            >
              <Home size={20} />
              Voltar ao início
            </button>
            <button
              className="action-button secondary"
              onClick={() => navigate("/bookings")}
            >
              <Calendar size={20} />
              Ver minhas reservas
            </button>
          </div>

          {/* Additional Info */}
          <div className="success-info">
            <p>
              Você pode visualizar todas as suas reservas a qualquer momento
              clicando em "Minhas Reservas" no cabeçalho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
