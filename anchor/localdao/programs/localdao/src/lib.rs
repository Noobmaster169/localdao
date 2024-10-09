use anchor_lang::prelude::*;
use anchor_lang::system_program;
use std::mem::size_of;

declare_id!("GQq7ZdCqWXLjNnNjjWJmgFNxNdomW34enX48owiP2WHP");

// Simple Proof of Concept of Voting Process in Local DAO
#[program]
pub mod localdao {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, amount: u64) -> Result<()> {
        ctx.accounts.voting_manager.owner = ctx.accounts.signer.key();
        
        let deposit_cpi = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            system_program::Transfer{
                from: ctx.accounts.signer.to_account_info().clone(),
                to: ctx.accounts.voting_manager.to_account_info().clone(),
            },
        );
        system_program::transfer(deposit_cpi, amount)?;
        Ok(())
    }

    pub fn vote(ctx: Context<Vote>, option: u64) -> Result<()>{
        let _voting_data = VotingData{
            owner: ctx.accounts.signer.key(),
            option,
        };
        ctx.accounts.voting_manager.add(_voting_data);
        Ok(())
    }

    pub fn createUser(ctx: Context<CreateUser>, option: u64) -> Result<()>{
        ctx.accounts.user.owner = ctx.accounts.signer.key();
        ctx.accounts.user.option = option;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info>{
    #[account(
        init, 
        payer = signer, 
        space = size_of::<VotingManager>() + 8,
        seeds = [b"localdao"],
        bump,
    )]
    pub voting_manager: Account<'info, VotingManager>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut, seeds=[b"localdao"], bump)]
    pub voting_manager: Account<'info, VotingManager>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateUser<'info>{
    #[account(
        init, 
        payer = signer, 
        space = size_of::<User>() + 8,
        seeds = [],
        bump,
    )]
    pub user: Account<'info, User>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct User {
    owner: Pubkey,
}


#[account]
#[derive(InitSpace)]
pub struct VotingManager {
    owner: Pubkey,
    #[max_len(10)]
    data: Vec<VotingData>,
}

impl VotingManager{
    pub fn add(&mut self, voting_data: VotingData) -> Result<()> {
        self.data.push(voting_data);
        Ok(())
    }
}

#[derive(InitSpace, AnchorSerialize, AnchorDeserialize, Clone)]
pub struct VotingData {
    owner: Pubkey,
    option: u64,
}