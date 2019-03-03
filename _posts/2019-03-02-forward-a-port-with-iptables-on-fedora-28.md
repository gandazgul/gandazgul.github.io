---
layout: post
title:  "How to simply forward a port with iptables on Fedora 28"
date:   2019-03-02 3:54:00 -0400
categories: [iptables, fedora]
---

I have KVM (libvirtd) installed on a Fedora 28 server and wanted to access some services inside the VMs like RDP for 
windows for example, this is how you do it with IPTables: 

1. Give your VM a static IP
2. Gather information
    * To check which bridge device libvirt is using you can use `virsh`
    * Run `virsh net-edit default` but dont actually change anything, just take note of the bridge name:
    `<bridge name='virbr0' ...`
3. Run these 2 commands as root (sudo): 
    ```bash
    # accepts traffic on the VM's ip address. Check that virbr0 is the bridge installed by libvirt it could be different for you.
    sudo iptables -I FORWARD -o virbr0 -d [VM IP HERE] -j ACCEPT
    sudo iptables -t nat -I PREROUTING -p tcp --dport [OUTSIDE PORT] -j DNAT --to [VM IP]:[SERVICE PORT]
    ```
4. Now you can connect to ip.of.host:[OUTSIDE PORT] and it will be forwarded to the VM on SERVICE PORT.
5. To persist the changes:
    1. Install iptables-services `sudo dnf install iptables-services` 
    2. to make sure they are loaded after restart `sudo systemsctl enable iptables`
    3. To save them run `sudo service iptables save`

After the first time when you want to forward a new port:

1. Run these 2 commands as root (sudo): 
   ```bash
   sudo iptables -I FORWARD -o virbr0 -d [VM IP HERE] -j ACCEPT
   sudo iptables -t nat -I PREROUTING -p tcp --dport [OUTSIDE PORT] -j DNAT --to [VM IP]:[SERVICE PORT]
   ```
2. Test that the port is forwarded
3. Then save them `sudo service iptables save`

Hope this was helpful, open an issue here if you need help: https://github.com/gandazgul/k8s-infrastructure

