module.exports = {
    name: 'sil',
    desription: '',
    execute(message, args){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Mesajları Yönetme Yetkisine Sahip Değilsin.')
        message.delete()
        if(!args[0]) return message.channel.send('lütfen 1 ila 100 Arası Bir Sayı Giriniz.')
        if(args[0] > 100) return message.channel.send('100 Sayısından Küçük Bir Sayı Giriniz.')
        if(isNaN (args[0])) return message.channel.send('Lütfen Geçerli Bir Sayı Giriniz.')
        message.channel.bulkDelete(args[0]);
    }
}