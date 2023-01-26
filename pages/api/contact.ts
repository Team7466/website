import discord, { EmbedBuilder } from "discord.js"

import type { NextApiRequest, NextApiResponse } from "next"
import type { TextChannel } from "discord.js"

const handler = async (req: NextApiRequest, res: NextApiResponse<{ message: string }>) => {
    try {
        const { name, email, subject, message } = req.body

        const nameIsLong = name.length > 100
        const emailIsLong = email.length > 100
        const subjectIsLong = subject.length > 250
        const messageIsLong = message.length > 4000

        if (nameIsLong || emailIsLong || subjectIsLong || messageIsLong) {
            res.status(500).json({ message: "error" })
            return
        }

        const embed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Yeni Mesaj!")
            .setURL("https://teamcymurghs.com/")
            .addFields(
                { name: "İsim Soyisim", value: name },
                { name: "Email", value: email },
                { name: "Konu", value: subject }
            )
            .setDescription("**" + message + "**")
            .setTimestamp()

        const client = new discord.Client({
            intents: [],
        })

        await client.login(process.env.DISCORD_TOKEN!)
        const channel = (await client.channels.fetch(process.env.CONTACT_CHANNEL_ID!)) as TextChannel

        await channel.send({ embeds: [embed] }).catch(_ => res.status(500).json({ message: "error" }))

        res.status(200).json({ message: "success" })
    } catch (_) {
        res.status(500).json({ message: "error" })
    }
}

export default handler
