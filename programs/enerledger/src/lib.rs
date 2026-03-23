use anchor_lang::prelude::*;

// El Playground actualizará este ID automáticamente al hacer Build
declare_id!("Hy3kEE4vVeZSNkxJCydF6RRzUMAJSWcLpUGeBa3K3HSo");

#[program]
pub mod enerledger {
    use super::*;

    // CREATE: Inicializa el medidor usando un PDA
    pub fn inicializar_medidor(ctx: Context<InicializarMedidor>, id_fisico: String) -> Result<()> {
        let registro = &mut ctx.accounts.registro_pda;
        registro.id_fisico = id_fisico;
        registro.total_kwh = 0;
        registro.autoridad = ctx.accounts.autoridad.key();
        msg!("Medidor inicializado con éxito!");
        Ok(())
    }

    // UPDATE: Registra nueva lectura
    pub fn registrar_lectura(ctx: Context<ActualizarMedidor>, nueva_lectura: u64) -> Result<()> {
        let registro = &mut ctx.accounts.registro_pda;
        // Sumamos la lectura al total acumulado
        registro.total_kwh += nueva_lectura;
        msg!("Lectura registrada. Total actual: {} kWh", registro.total_kwh);
        Ok(())
    }

    // DELETE: Cierre seguro de cuenta para recuperar SOL (Gestión de recursos DePIN)
    pub fn eliminar_registro(_ctx: Context<EliminarMedidor>) -> Result<()> {
        msg!("Registro de medidor eliminado y renta recuperada.");
        Ok(())
    }
}
