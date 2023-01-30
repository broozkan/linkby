CREATE INDEX clicks_index 
ON clicks(id, campaign_id);

CREATE INDEX campaigns_index 
ON campaigns(id, account_id, start_date, end_date, created_at);

CREATE INDEX accounts_index 
ON accounts(id, active, created_at);