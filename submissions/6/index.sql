select count(*) as num_clicks,to_char(date(clicks.created_at),'YYYY-MM') as month from clicks 
join campaigns on campaigns.id=clicks.campaign_id 
join accounts on accounts.id=campaigns.account_id
where accounts.active=true and campaigns.created_at >  CURRENT_DATE - INTERVAL '6 months'
and (campaigns.start_date - campaigns.end_date) > (7 * '1 day'::interval)
group by clicks.created_at