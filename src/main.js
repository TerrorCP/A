import{Client, Events, GatewayIntentBits} from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import {loadCommands} from '@/core/loader'


vueInit()
dotenv.config()

loadCommands()

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(process.env.TOKEN)